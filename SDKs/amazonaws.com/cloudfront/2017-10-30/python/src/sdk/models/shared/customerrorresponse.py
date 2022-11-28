from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CustomErrorResponse:
    r"""CustomErrorResponse
    <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. </p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html\">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    """
    
    error_code: int = field()
    error_caching_min_ttl: Optional[int] = field(default=None)
    response_code: Optional[str] = field(default=None)
    response_page_path: Optional[str] = field(default=None)
    
