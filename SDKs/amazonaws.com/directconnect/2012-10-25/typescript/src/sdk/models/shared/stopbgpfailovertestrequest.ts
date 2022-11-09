import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopBgpFailoverTestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
