from dataclasses import dataclass, field



@dataclass
class Limits:
    maximum_partition_count: int = field()
    maximum_replication_count: int = field()
    
