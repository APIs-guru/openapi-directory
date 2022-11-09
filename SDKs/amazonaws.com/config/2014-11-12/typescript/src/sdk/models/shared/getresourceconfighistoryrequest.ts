import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChronologicalOrderEnum } from "./chronologicalorderenum";
import { ResourceTypeEnum } from "./resourcetypeenum";


// GetResourceConfigHistoryRequest
/** 
 * The input for the <a>GetResourceConfigHistory</a> action.
**/
export class GetResourceConfigHistoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=chronologicalOrder" })
  chronologicalOrder?: ChronologicalOrderEnum;

  @Metadata({ data: "json, name=earlierTime" })
  earlierTime?: Date;

  @Metadata({ data: "json, name=laterTime" })
  laterTime?: Date;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
