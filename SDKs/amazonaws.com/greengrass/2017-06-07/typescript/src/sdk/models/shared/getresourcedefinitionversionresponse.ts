import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDefinitionVersion } from "./resourcedefinitionversion";


export class GetResourceDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=Definition" })
  definition?: ResourceDefinitionVersion;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
