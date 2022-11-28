import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedCredentialsActionEnum } from "./managedcredentialsactionenum";



export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "json, name=managedCredentialsAction" })
  managedCredentialsAction?: ManagedCredentialsActionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
