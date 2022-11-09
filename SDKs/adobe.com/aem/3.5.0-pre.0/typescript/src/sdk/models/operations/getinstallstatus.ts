import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInstallStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  installStatus?: shared.InstallStatus;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInstallStatusDefaultApplicationJsonString?: string;
}
