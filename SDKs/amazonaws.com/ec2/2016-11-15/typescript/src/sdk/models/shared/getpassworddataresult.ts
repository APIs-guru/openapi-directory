import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPasswordDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  passwordData?: string;

  @SpeakeasyMetadata()
  timestamp?: Date;
}
