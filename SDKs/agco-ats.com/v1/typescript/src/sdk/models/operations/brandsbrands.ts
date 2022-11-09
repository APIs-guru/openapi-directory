import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BrandsBrandsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  brandsBrands200ApplicationJsonStrings?: string[];

  @Metadata()
  brandsBrands200TextJsonStrings?: string[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
