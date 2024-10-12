import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.factors_residualization_post200_response import FactorsResidualizationPost200Response  # noqa: E501
from openapi_server.models.factors_residualization_post_request import FactorsResidualizationPostRequest  # noqa: E501
from openapi_server import util


def factors_residualization_post(body):  # noqa: E501
    """Residualization

    Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.  References * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/) * [Catalina B. Garcia, Román Salmeron, Claudia Garcia &amp; Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[FactorsResidualizationPost200Response, Tuple[FactorsResidualizationPost200Response, int], Tuple[FactorsResidualizationPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = FactorsResidualizationPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
