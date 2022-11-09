import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { ResourceUri } from "./resourceuri";


// UserDefinedFunction
/** 
 * Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.
**/
export class UserDefinedFunction extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ClassName" })
  className?: string;

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @Metadata({ data: "json, name=OwnerName" })
  ownerName?: string;

  @Metadata({ data: "json, name=OwnerType" })
  ownerType?: PrincipalTypeEnum;

  @Metadata({ data: "json, name=ResourceUris", elemType: shared.ResourceUri })
  resourceUris?: ResourceUri[];
}
