import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupVersion } from "./groupversion";



export class GetGroupVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: GroupVersion;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
