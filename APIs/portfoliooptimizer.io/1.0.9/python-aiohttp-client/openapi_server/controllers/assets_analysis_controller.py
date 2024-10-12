from typing import List, Dict
from aiohttp import web

from openapi_server.models.assets_analysis_absorption_ratio_post200_response import AssetsAnalysisAbsorptionRatioPost200Response
from openapi_server.models.assets_analysis_absorption_ratio_post_request import AssetsAnalysisAbsorptionRatioPostRequest
from openapi_server.models.assets_analysis_turbulence_index_post200_response import AssetsAnalysisTurbulenceIndexPost200Response
from openapi_server.models.assets_analysis_turbulence_index_post_request import AssetsAnalysisTurbulenceIndexPostRequest
from openapi_server import util


async def assets_analysis_absorption_ratio_post(request: web.Request, body) -> web.Response:
    """Absorption Ratio

    Compute the absorption ratio associated to a universe of assets.  References * [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsAnalysisAbsorptionRatioPostRequest.from_dict(body)
    return web.Response(status=200)


async def assets_analysis_turbulence_index_post(request: web.Request, body) -> web.Response:
    """Turbulence Index

    Compute the turbulence index associated to a universe of assets.  References * [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3) * [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27) 

    :param body: 
    :type body: dict | bytes

    """
    body = AssetsAnalysisTurbulenceIndexPostRequest.from_dict(body)
    return web.Response(status=200)
