import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupVersion } from "./groupversion";


export class GetGroupVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=Definition" })
  definition?: GroupVersion;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
