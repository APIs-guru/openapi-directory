import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopBgpFailoverTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
