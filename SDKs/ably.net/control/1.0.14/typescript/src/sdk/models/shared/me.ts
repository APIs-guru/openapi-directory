import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MeAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class MeToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities" })
  capabilities: string[];

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class MeUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=id" })
  id: number;
}


export class Me extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: MeAccount;

  @Metadata({ data: "json, name=token" })
  token?: MeToken;

  @Metadata({ data: "json, name=user" })
  user?: MeUser;
}
