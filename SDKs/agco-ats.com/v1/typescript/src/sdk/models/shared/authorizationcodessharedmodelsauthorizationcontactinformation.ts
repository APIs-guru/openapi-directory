import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCodesSharedModelsAuthorizationContactInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationCodeID, form, name=AuthorizationCodeID;" })
  authorizationCodeId: number;

  @Metadata({ data: "json, name=Code, form, name=Code;" })
  code?: string;

  @Metadata({ data: "json, name=Contact, form, name=Contact;" })
  contact: string;

  @Metadata({ data: "json, name=CreatedBy, form, name=CreatedBy;" })
  createdBy?: string;

  @Metadata({ data: "json, name=CreatedDate, form, name=CreatedDate;" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode: string;

  @Metadata({ data: "json, name=Dealership, form, name=Dealership;" })
  dealership: string;

  @Metadata({ data: "json, name=DefinitionName, form, name=DefinitionName;" })
  definitionName?: string;

  @Metadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @Metadata({ data: "json, name=Notes, form, name=Notes;" })
  notes?: string;

  @Metadata({ data: "json, name=Phone, form, name=Phone;" })
  phone: string;
}
