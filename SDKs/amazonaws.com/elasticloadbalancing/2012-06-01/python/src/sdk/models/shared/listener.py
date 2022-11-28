from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Listener:
    r"""Listener
    <p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html\">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
    """
    
    instance_port: int = field()
    load_balancer_port: int = field()
    protocol: str = field()
    instance_protocol: Optional[str] = field(default=None)
    ssl_certificate_id: Optional[str] = field(default=None)
    
