import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Distribution } from "./distribution";


// DistributionConfiguration
/** 
 * A distribution configuration.
**/
export class DistributionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=dateUpdated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=distributions", elemType: shared.Distribution })
  distributions?: Distribution[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=timeoutMinutes" })
  timeoutMinutes: number;
}
