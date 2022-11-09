import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiModelsAuthenticatedUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=MACId" })
  macId?: string;

  @Metadata({ data: "json, name=MACToken" })
  macToken?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Token" })
  token?: string;

  @Metadata({ data: "json, name=UserID" })
  userId?: number;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
