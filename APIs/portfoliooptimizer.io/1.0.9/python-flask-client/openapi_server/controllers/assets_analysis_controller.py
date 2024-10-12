import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.assets_analysis_absorption_ratio_post200_response import AssetsAnalysisAbsorptionRatioPost200Response  # noqa: E501
from openapi_server.models.assets_analysis_absorption_ratio_post_request import AssetsAnalysisAbsorptionRatioPostRequest  # noqa: E501
from openapi_server.models.assets_analysis_turbulence_index_post200_response import AssetsAnalysisTurbulenceIndexPost200Response  # noqa: E501
from openapi_server.models.assets_analysis_turbulence_index_post_request import AssetsAnalysisTurbulenceIndexPostRequest  # noqa: E501
from openapi_server import util


def assets_analysis_absorption_ratio_post(body):  # noqa: E501
    """Absorption Ratio

    Compute the absorption ratio associated to a universe of assets.  References * [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsAnalysisAbsorptionRatioPost200Response, Tuple[AssetsAnalysisAbsorptionRatioPost200Response, int], Tuple[AssetsAnalysisAbsorptionRatioPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsAnalysisAbsorptionRatioPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def assets_analysis_turbulence_index_post(body):  # noqa: E501
    """Turbulence Index

    Compute the turbulence index associated to a universe of assets.  References * [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3) * [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27)  # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Union[AssetsAnalysisTurbulenceIndexPost200Response, Tuple[AssetsAnalysisTurbulenceIndexPost200Response, int], Tuple[AssetsAnalysisTurbulenceIndexPost200Response, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        body = AssetsAnalysisTurbulenceIndexPostRequest.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
