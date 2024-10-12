import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post_request import AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest  # noqa: E501
from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_post200_response import AssetsReturnsSimulationMonteCarloCornishFisherPost200Response  # noqa: E501
from openapi_server.models.assets_returns_simulation_monte_carlo_cornish_fisher_post_request import AssetsReturnsSimulationMonteCarloCornishFisherPostRequest  # noqa: E501
from openapi_server.models.assets_returns_simulation_monte_carlo_gaussian_post_request import AssetsReturnsSimulationMonteCarloGaussianPostRequest  # noqa: E501
from openapi_server import util


def assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post(body):  # noqa: E501
    """Corrected Cornish-Fisher Distribution

    Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, Tuple[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, int], Tuple[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_returns_simulation_monte_carlo_cornish_fisher_post(body):  # noqa: E501
    """Cornish-Fisher Distribution

    Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, Tuple[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, int], Tuple[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_returns_simulation_monte_carlo_gaussian_post(body):  # noqa: E501
    """Gaussian Distribution

    Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.  References * [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, Tuple[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, int], Tuple[AssetsReturnsSimulationMonteCarloCornishFisherPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsReturnsSimulationMonteCarloGaussianPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
