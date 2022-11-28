import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChronologicalOrderEnum } from "./chronologicalorderenum";
import { ResourceTypeEnum } from "./resourcetypeenum";



// GetResourceConfigHistoryRequest
/** 
 * The input for the <a>GetResourceConfigHistory</a> action.
**/
export class GetResourceConfigHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chronologicalOrder" })
  chronologicalOrder?: ChronologicalOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=earlierTime" })
  earlierTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=laterTime" })
  laterTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
