import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cors } from "./cors";
import { ProtocolTypeEnum } from "./protocoltypeenum";


export class CreateApiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiEndpoint" })
  apiEndpoint?: string;

  @Metadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @Metadata({ data: "json, name=ApiId" })
  apiId?: string;

  @Metadata({ data: "json, name=ApiKeySelectionExpression" })
  apiKeySelectionExpression?: string;

  @Metadata({ data: "json, name=CorsConfiguration" })
  corsConfiguration?: Cors;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @Metadata({ data: "json, name=DisableSchemaValidation" })
  disableSchemaValidation?: boolean;

  @Metadata({ data: "json, name=ImportInfo" })
  importInfo?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProtocolType" })
  protocolType?: ProtocolTypeEnum;

  @Metadata({ data: "json, name=RouteSelectionExpression" })
  routeSelectionExpression?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=Warnings" })
  warnings?: string[];
}
