from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AnalysisScheme:
    r"""AnalysisScheme
    Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
    """
    
    analysis_scheme_language: AnalysisSchemeLanguageEnum = field()
    analysis_scheme_name: str = field()
    analysis_options: Optional[AnalysisOptions] = field(default=None)
    
