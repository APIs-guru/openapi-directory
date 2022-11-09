import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteHsmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=EniId" })
  eniId?: string;

  @Metadata({ data: "json, name=EniIp" })
  eniIp?: string;

  @Metadata({ data: "json, name=HsmId" })
  hsmId?: string;
}
