from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TunnelOption:
    r"""TunnelOption
    The VPN tunnel options.
    """
    
    dpd_timeout_action: Optional[str] = field(default=None)
    dpd_timeout_seconds: Optional[int] = field(default=None)
    ike_versions: Optional[List[IkeVersionsListValue]] = field(default=None)
    outside_ip_address: Optional[str] = field(default=None)
    phase1_dh_group_numbers: Optional[List[Phase1DhGroupNumbersListValue]] = field(default=None)
    phase1_encryption_algorithms: Optional[List[Phase1EncryptionAlgorithmsListValue]] = field(default=None)
    phase1_integrity_algorithms: Optional[List[Phase1IntegrityAlgorithmsListValue]] = field(default=None)
    phase1_lifetime_seconds: Optional[int] = field(default=None)
    phase2_dh_group_numbers: Optional[List[Phase2DhGroupNumbersListValue]] = field(default=None)
    phase2_encryption_algorithms: Optional[List[Phase2EncryptionAlgorithmsListValue]] = field(default=None)
    phase2_integrity_algorithms: Optional[List[Phase2IntegrityAlgorithmsListValue]] = field(default=None)
    phase2_lifetime_seconds: Optional[int] = field(default=None)
    pre_shared_key: Optional[str] = field(default=None)
    rekey_fuzz_percentage: Optional[int] = field(default=None)
    rekey_margin_time_seconds: Optional[int] = field(default=None)
    replay_window_size: Optional[int] = field(default=None)
    startup_action: Optional[str] = field(default=None)
    tunnel_inside_cidr: Optional[str] = field(default=None)
    tunnel_inside_ipv6_cidr: Optional[str] = field(default=None)
    
