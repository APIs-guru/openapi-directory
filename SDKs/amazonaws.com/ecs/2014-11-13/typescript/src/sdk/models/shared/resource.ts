import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Resource
/** 
 * Describes the resources available for a container instance.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: number;

  @Metadata({ data: "json, name=longValue" })
  longValue?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stringSetValue" })
  stringSetValue?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
