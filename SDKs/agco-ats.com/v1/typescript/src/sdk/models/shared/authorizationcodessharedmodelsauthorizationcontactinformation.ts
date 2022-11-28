import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorizationCodesSharedModelsAuthorizationContactInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationCodeID, form, name=AuthorizationCodeID;" })
  authorizationCodeId: number;

  @SpeakeasyMetadata({ data: "json, name=Code, form, name=Code;" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Contact, form, name=Contact;" })
  contact: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy, form, name=CreatedBy;" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate, form, name=CreatedDate;" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode: string;

  @SpeakeasyMetadata({ data: "json, name=Dealership, form, name=Dealership;" })
  dealership: string;

  @SpeakeasyMetadata({ data: "json, name=DefinitionName, form, name=DefinitionName;" })
  definitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Notes, form, name=Notes;" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Phone, form, name=Phone;" })
  phone: string;
}
