import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.portfolio_simulation_rebalancing_drift_weight_post200_response import PortfolioSimulationRebalancingDriftWeightPost200Response  # noqa: E501
from openapi_server.models.portfolio_simulation_rebalancing_drift_weight_post_request import PortfolioSimulationRebalancingDriftWeightPostRequest  # noqa: E501
from openapi_server.models.portfolio_simulation_rebalancing_random_weight_post_request import PortfolioSimulationRebalancingRandomWeightPostRequest  # noqa: E501
from openapi_server import util


def portfolio_simulation_rebalancing_drift_weight_post(body):  # noqa: E501
    """Drift-weight Portfolio Rebalancing

    Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract&#x3D;2746471)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioSimulationRebalancingDriftWeightPost200Response, Tuple[PortfolioSimulationRebalancingDriftWeightPost200Response, int], Tuple[PortfolioSimulationRebalancingDriftWeightPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioSimulationRebalancingDriftWeightPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_simulation_rebalancing_fixed_weight_post(body):  # noqa: E501
    """Fixed-weight Portfolio Rebalancing

    Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract&#x3D;2746471)          # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioSimulationRebalancingDriftWeightPost200Response, Tuple[PortfolioSimulationRebalancingDriftWeightPost200Response, int], Tuple[PortfolioSimulationRebalancingDriftWeightPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioSimulationRebalancingDriftWeightPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def portfolio_simulation_rebalancing_random_weight_post(body):  # noqa: E501
    """Random-weight Portfolio Rebalancing

    Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.  References * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[PortfolioSimulationRebalancingDriftWeightPost200Response, Tuple[PortfolioSimulationRebalancingDriftWeightPost200Response, int], Tuple[PortfolioSimulationRebalancingDriftWeightPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = PortfolioSimulationRebalancingRandomWeightPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
