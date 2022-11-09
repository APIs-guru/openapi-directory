import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConfigMgrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getConfigMgr200TextXmlString?: string;
}
