from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregateConformancePackCompliance:
    r"""AggregateConformancePackCompliance
    <p>Provides the number of compliant and noncompliant rules within a conformance pack. Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
    """
    
    compliance_type: Optional[ConformancePackComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    compliant_rule_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantRuleCount') }})
    non_compliant_rule_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantRuleCount') }})
    total_rule_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRuleCount') }})
    
