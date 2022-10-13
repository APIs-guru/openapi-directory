from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sparksubmitjobdriver


@dataclass_json
@dataclass
class JobDriver:
    spark_submit_job_driver: Optional[sparksubmitjobdriver.SparkSubmitJobDriver] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkSubmitJobDriver' }})
    
