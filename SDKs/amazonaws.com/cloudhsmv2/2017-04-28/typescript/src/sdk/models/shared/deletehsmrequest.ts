import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteHsmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=EniId" })
  eniId?: string;

  @SpeakeasyMetadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmId" })
  hsmId?: string;
}
