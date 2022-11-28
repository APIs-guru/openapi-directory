from dataclasses import dataclass, field



@dataclass
class MetricDimension:
    r"""MetricDimension
    Describes the dimension of a metric.
    """
    
    name: str = field()
    value: str = field()
    
