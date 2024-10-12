import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_returns_simulation_bootstrap_post200_response import AssetsReturnsSimulationBootstrapPost200Response  # noqa: E501
from openapi_server.models.assets_returns_simulation_bootstrap_post_request import AssetsReturnsSimulationBootstrapPostRequest  # noqa: E501
from openapi_server import util


def assets_returns_simulation_bootstrap_post(body):  # noqa: E501
    """Bootstrap

    Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.  References * [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full) * [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data) * [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsReturnsSimulationBootstrapPost200Response, Tuple[AssetsReturnsSimulationBootstrapPost200Response, int], Tuple[AssetsReturnsSimulationBootstrapPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsReturnsSimulationBootstrapPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
