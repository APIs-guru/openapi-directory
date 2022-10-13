from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import dealerdb_models_voucher
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIPagedResponseDealerDbModelsVoucher:
    entities: List[dealerdb_models_voucher.DealerDbModelsVoucher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: api_pagedresponsemetadata.APIPagedResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
