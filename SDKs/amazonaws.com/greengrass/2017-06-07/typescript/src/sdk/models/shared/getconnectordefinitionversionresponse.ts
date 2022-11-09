import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorDefinitionVersion } from "./connectordefinitionversion";


export class GetConnectorDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=Definition" })
  definition?: ConnectorDefinitionVersion;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
