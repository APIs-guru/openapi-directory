from typing import List, Dict
from aiohttp import web

from openapi_server.models.factors_residualization_post200_response import FactorsResidualizationPost200Response
from openapi_server.models.factors_residualization_post_request import FactorsResidualizationPostRequest
from openapi_server import util


async def factors_residualization_post(request: web.Request, body) -> web.Response:
    """Residualization

    Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.  References * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/) * [Catalina B. Garcia, Román Salmeron, Claudia Garcia &amp; Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638) 

    :param body: 
    :type body: dict | bytes

    """
    body = FactorsResidualizationPostRequest.from_dict(body)
    return web.Response(status=200)
