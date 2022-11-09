import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypeDefinitionFormatEnum } from "./typedefinitionformatenum";


// Type
/** 
 * Describes a type.
**/
export class Type extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=definition" })
  definition?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=format" })
  format?: TypeDefinitionFormatEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
