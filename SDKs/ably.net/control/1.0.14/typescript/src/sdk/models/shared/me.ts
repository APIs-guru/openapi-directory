import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MeAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class MeToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class MeUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class Me extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: MeAccount;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: MeToken;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: MeUser;
}
