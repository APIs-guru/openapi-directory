import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Resource
/** 
 * Describes the resources available for a container instance.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=integerValue" })
  integerValue?: number;

  @SpeakeasyMetadata({ data: "json, name=longValue" })
  longValue?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stringSetValue" })
  stringSetValue?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
