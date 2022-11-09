import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeGenNodeArg } from "./codegennodearg";
import { CodeGenNodeArg } from "./codegennodearg";
import { CodeGenNodeArg } from "./codegennodearg";


// Location
/** 
 * The location of resources.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=DynamoDB", elemType: shared.CodeGenNodeArg })
  dynamoDb?: CodeGenNodeArg[];

  @Metadata({ data: "json, name=Jdbc", elemType: shared.CodeGenNodeArg })
  jdbc?: CodeGenNodeArg[];

  @Metadata({ data: "json, name=S3", elemType: shared.CodeGenNodeArg })
  s3?: CodeGenNodeArg[];
}
