import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateUserProfileResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdTimestamp" })
  createdTimestamp?: Date;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=lastModifiedTimestamp" })
  lastModifiedTimestamp?: Date;

  @Metadata({ data: "json, name=sshPublicKey" })
  sshPublicKey?: string;

  @Metadata({ data: "json, name=userArn" })
  userArn: string;
}
