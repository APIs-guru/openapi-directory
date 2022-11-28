import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebBackendConnectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=withRefreshedCatalog" })
  withRefreshedCatalog?: boolean;
}
