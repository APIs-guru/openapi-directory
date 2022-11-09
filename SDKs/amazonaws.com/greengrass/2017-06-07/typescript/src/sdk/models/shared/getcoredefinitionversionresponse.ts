import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CoreDefinitionVersion } from "./coredefinitionversion";


export class GetCoreDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=Definition" })
  definition?: CoreDefinitionVersion;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
