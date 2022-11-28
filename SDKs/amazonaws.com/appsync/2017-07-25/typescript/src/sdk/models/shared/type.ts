import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypeDefinitionFormatEnum } from "./typedefinitionformatenum";



// Type
/** 
 * Describes a type.
**/
export class Type extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: TypeDefinitionFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
