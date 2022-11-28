import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInstallStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  installStatus?: shared.InstallStatus;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInstallStatusDefaultApplicationJsonString?: string;
}
