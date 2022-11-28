import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConfigMgrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConfigMgr200TextXmlString?: string;
}
