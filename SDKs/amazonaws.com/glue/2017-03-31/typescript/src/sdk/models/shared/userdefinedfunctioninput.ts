import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { ResourceUri } from "./resourceuri";


// UserDefinedFunctionInput
/** 
 * A structure used to create or update a user-defined function.
**/
export class UserDefinedFunctionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClassName" })
  className?: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @Metadata({ data: "json, name=OwnerName" })
  ownerName?: string;

  @Metadata({ data: "json, name=OwnerType" })
  ownerType?: PrincipalTypeEnum;

  @Metadata({ data: "json, name=ResourceUris", elemType: shared.ResourceUri })
  resourceUris?: ResourceUri[];
}
