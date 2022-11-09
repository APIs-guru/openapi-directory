import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceFrequencyEnum } from "./sourcefrequencyenum";
import { SourceKeyword } from "./sourcekeyword";
import { SourceSetUpOptionEnum } from "./sourcesetupoptionenum";
import { SourceTypeEnum } from "./sourcetypeenum";


// CreateControlMappingSource
/** 
 *  Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>. 
**/
export class CreateControlMappingSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceDescription" })
  sourceDescription?: string;

  @Metadata({ data: "json, name=sourceFrequency" })
  sourceFrequency?: SourceFrequencyEnum;

  @Metadata({ data: "json, name=sourceKeyword" })
  sourceKeyword?: SourceKeyword;

  @Metadata({ data: "json, name=sourceName" })
  sourceName?: string;

  @Metadata({ data: "json, name=sourceSetUpOption" })
  sourceSetUpOption?: SourceSetUpOptionEnum;

  @Metadata({ data: "json, name=sourceType" })
  sourceType?: SourceTypeEnum;

  @Metadata({ data: "json, name=troubleshootingText" })
  troubleshootingText?: string;
}
