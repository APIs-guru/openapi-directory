import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedCredentialsActionEnum } from "./managedcredentialsactionenum";


export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environmentId" })
  environmentId: string;

  @Metadata({ data: "json, name=managedCredentialsAction" })
  managedCredentialsAction?: ManagedCredentialsActionEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
