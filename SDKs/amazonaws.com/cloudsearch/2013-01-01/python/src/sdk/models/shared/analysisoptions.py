from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AnalysisOptions:
    r"""AnalysisOptions
    Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
    """
    
    algorithmic_stemming: Optional[AlgorithmicStemmingEnum] = field(default=None)
    japanese_tokenization_dictionary: Optional[str] = field(default=None)
    stemming_dictionary: Optional[str] = field(default=None)
    stopwords: Optional[str] = field(default=None)
    synonyms: Optional[str] = field(default=None)
    
